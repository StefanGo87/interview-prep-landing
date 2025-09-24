// app/notepad/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Chapter = { title: string; description: string };
const chapters: Record<number, Chapter> = {
  1: {
    title: "Chapter 1: Self Intro",
    description:
      "Prepare a 2–3 minutes self introduction. Be concise and use bullet points to keep each sentence short and crisp. Start with your age, single or married/kids, interests (max 3), education, then briefly the past job positions and departments you have worked in, and the key function relevant for the role.",
  },
  2: {
    title: "Chapter 2: Research the Company",
    description:
      "Understand the company operations, technology, organization, culture, and latest news. The notes should help answer: 'What do you know about the company and why did you apply?'",
  },
  3: {
    title: "Chapter 3: Research the Role",
    description:
      "Prepare 5–8 questions relevant for the role, but also for the company. For a first interview, keep it general (e.g., What is the biggest challenge? Where do you see opportunity? What would you change? What do you expect from this role? What is the company culture? How is the team organized? What is the meeting landscape?).",
  },
  4: {
    title: "Chapter 4: Key Success Stories",
    description:
      "Prepare your general CV and focus on key success stories using the STAR Method. Depending on the case, prepare 2–5 stories.",
  },
  5: {
    title: "Chapter 5: Behavior Questions",
    description: "STAR answers for behavioral questions.",
  },
  6: {
    title: "Chapter 6: Closing Message",
    description:
      "1–2 minutes closing message. First, thank them for the time. Now you have a better understanding of the role and company, which confirms your interest and your fit for the role. Ask: What are the next steps moving forward?",
  },
};

export default function NotepadPage() {
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [savedNotes, setSavedNotes] = useState<Record<string, string>>({});
  const [editable, setEditable] = useState(true);
  const notesRef = useRef<HTMLDivElement>(null);
  const prevChapterRef = useRef<number>(1);
  const chapterOrder = Object.keys(chapters);

  // Load saved notes once
  useEffect(() => {
    try {
      const fromLS = JSON.parse(localStorage.getItem("interviewNotes") || "{}");
      if (fromLS && typeof fromLS === "object") setSavedNotes(fromLS);
    } catch {}
  }, []);

  // Dark theme only on this route
  useEffect(() => {
    document.body.classList.add("notepad-dark");
    return () => document.body.classList.remove("notepad-dark");
  }, []);

  // Re-initialize editor whenever chapter changes
  useEffect(() => {
    const el = notesRef.current;
    if (!el) return;
    const html = savedNotes[String(currentChapter)] || "<div></div>";
    el.innerHTML = html;
    // focus + put caret at end
    el.focus();
    const last = el.querySelector("div:last-child") as HTMLElement | null;
    placeCursorAtEnd(last || el);
  }, [currentChapter, savedNotes, editable]);

  // --- Helpers ---
  const placeCursorAtEnd = (el: HTMLElement) => {
    try {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      if (!sel) return;
      sel.removeAllRanges();
      sel.addRange(range);
    } catch {}
  };

  const switchChapter = (nextId: number) => {
    // autosave current before switching
    if (notesRef.current) {
      const html = notesRef.current.innerHTML;
      const updated = { ...savedNotes, [String(currentChapter)]: html };
      setSavedNotes(updated);
      localStorage.setItem("interviewNotes", JSON.stringify(updated));
    }
    prevChapterRef.current = currentChapter;
    setCurrentChapter(nextId);
  };

  const saveNotes = () => {
    if (!notesRef.current) return;
    const html = notesRef.current.innerHTML;
    const updated = { ...savedNotes, [String(currentChapter)]: html };
    setSavedNotes(updated);
    localStorage.setItem("interviewNotes", JSON.stringify(updated));
    alert(`Notes saved for ${chapters[currentChapter].title}`);
  };

  const toggleEdit = () => {
    // if turning OFF edit -> save current
    if (editable && notesRef.current) {
      const html = notesRef.current.innerHTML;
      const updated = { ...savedNotes, [String(currentChapter)]: html };
      setSavedNotes(updated);
      localStorage.setItem("interviewNotes", JSON.stringify(updated));
    }
    setEditable((v) => !v);
    // when turning ON, focus back in
    if (!editable) {
      setTimeout(() => {
        const el = notesRef.current;
        if (!el) return;
        el.focus();
        const last = el.querySelector("div:last-child") as HTMLElement | null;
        placeCursorAtEnd(last || el);
      }, 0);
    }
  };

  // Enter => new bullet div
  const onNotesKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const n = document.createElement("div");
      notesRef.current?.appendChild(n);
      placeCursorAtEnd(n);
    }
  };

  const onNotesClick: React.MouseEventHandler<HTMLDivElement> = () => {
    const el = notesRef.current;
    if (!el) return;
    if (!el.innerHTML) el.innerHTML = "<div></div>";
  };

  // All-notes popup (unchanged)
  const viewAllNotes = () => {
    const w = window.open("", "_blank");
    if (!w) return alert("Allow pop-ups to view all notes.");

    const order = chapterOrder;
    const notesObj = { ...savedNotes };
    const esc = (s: string) => s.replace(/<\/script>/gi, "<\\/script>");

    let html = `<!doctype html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>All Interview Notes</title>
<style>
  body { font-family: Arial,sans-serif; max-width:900px; margin:20px auto; padding:0 18px; background:#000; color:#fff; }
  h2,h3 { color:#4da3ff; }
  .controls { margin:8px 0 18px; display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
  .edit-btn { background:linear-gradient(135deg,#ffc107,#d4ac0d); color:#111; font-weight:700; padding:8px 16px; border-radius:8px; }
  .move-btn { background:linear-gradient(135deg,#17a2b8,#117a8b); color:#fff; border-radius:8px; padding:6px 10px; }
  .chapter-row { border-top:1px solid #333; padding:12px 0; display:flex; flex-direction:column; gap:8px; }
  .chapter-header { display:flex; align-items:center; gap:8px; }
  .chapter-header h3 { margin:0; flex:1; }
  .notes { border:1px solid #444; padding:12px; background:#1a1a1a; min-height:44px; color:#fff; border-radius:6px; }
  .notes div { padding-left:18px; position:relative; margin:6px 0; }
  .notes div::before { content:"•"; position:absolute; left:0; color:#ccc; }
  .small-hint { color:#aaa; font-size:13px; margin-left:auto; }
  #timer { position:fixed; top:10px; right:20px; font-weight:bold; background:#111; padding:6px 10px; border-radius:8px; }
  select { border-radius:8px; padding:6px 8px; background:#0f0f10; color:#fff; border:1px solid #333; }
</style></head><body>
  <div class="controls">
    <button class="edit-btn" id="toggleEditBtn">Edit Notes</button>
    <label for="fontSizeSelect">Font Size:</label>
    <select id="fontSizeSelect">
      <option value="14px">Small</option>
      <option value="16px" selected>Medium</option>
      <option value="18px">Large</option>
      <option value="20px">X-Large</option>
    </select>
    <button class="move-btn" id="startTimerBtn">Start Timer</button>
    <button class="move-btn" id="stopTimerBtn">Stop/Reset Timer</button>
    <span class="small-hint">Use ▲ / ▼ to reorder chapters.</span>
  </div>
  <div id="timer">00:00:00</div>
  <h2>All Interview Notes</h2>
  <div id="chapters-container">`;

    order.forEach((id) => {
      const cid = Number(id);
      const raw = notesObj[id] || "<div></div>";
      html += `
    <div class="chapter-row" data-chapter="${id}">
      <div class="chapter-header">
        <h3>${escapeHtml(chapters[cid].title)}</h3>
        <div class="move-controls">
          <button class="move-btn move-up">▲</button>
          <button class="move-btn move-down">▼</button>
        </div>
      </div>
      <div class="notes" contenteditable="false" data-chapter="${id}">${esc(String(raw))}</div>
    </div>`;
    });

    html += `
  </div>
  <script>
  (function(){
    const container=document.getElementById('chapters-container');
    const toggleBtn=document.getElementById('toggleEditBtn');
    const fontSizeSelect=document.getElementById('fontSizeSelect');
    const timerEl=document.getElementById('timer');
    const startBtn=document.getElementById('startTimerBtn');
    const stopBtn=document.getElementById('stopTimerBtn');
    let editing=false, started=false, start=0, timerInterval=null;

    toggleBtn.addEventListener('click',()=>{
      editing=!editing;
      container.querySelectorAll('.notes').forEach(n=>n.setAttribute('contenteditable',editing?'true':'false'));
      toggleBtn.textContent=editing?'Save Notes':'Edit Notes';
      if(!editing){ saveNotes(); }
    });

    function saveNotes(){
      const updated={};
      container.querySelectorAll('.notes').forEach(n=>updated[n.dataset.chapter]=n.innerHTML);
      if(window.opener){
        window.opener.savedNotes = Object.assign(window.opener.savedNotes||{}, updated);
        window.opener.localStorage.setItem('interviewNotes', JSON.stringify(window.opener.savedNotes));
      }
    }

    container.addEventListener('click',e=>{
      if(e.target.matches('.move-up,.move-down')){
        const row=e.target.closest('.chapter-row');
        const sibling=e.target.classList.contains('move-up')?row.previousElementSibling:row.nextElementSibling;
        if(sibling){ row.parentNode.insertBefore(row, e.target.classList.contains('move-up')?sibling:row); }
      }
    });

    fontSizeSelect.addEventListener('change',()=>{
      container.querySelectorAll('.notes').forEach(n=>n.style.fontSize=fontSizeSelect.value);
    });

    startBtn.addEventListener('click',()=>{
      if(started) return;
      started=true; start=Date.now();
      timerInterval=setInterval(()=>{
        const s=Math.floor((Date.now()-start)/1000);
        timerEl.textContent=new Date(s*1000).toISOString().substr(11,8);
      },1000);
    });

    stopBtn.addEventListener('click',()=>{
      clearInterval(timerInterval);
      started=false;
      timerEl.textContent="00:00:00";
    });
  })();
  <\\/script></body></html>`;

    w.document.open();
    w.document.write(html);
    w.document.close();
  };

  return (
    <>
      <style jsx global>{`
        body.notepad-dark { background:#000; color:#fff; }
        .notepad-wrapper { max-width:900px; margin:20px auto; padding:0 20px; font-family:Arial,sans-serif; }
        h2 { text-align:center; color:#4da3ff; }
        .chapter-buttons { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-bottom:18px; }
        .chapter-buttons button, .action-buttons button {
          padding:10px 16px; border:none; border-radius:8px; cursor:pointer; font-size:14px; font-weight:700; color:#fff;
          background:linear-gradient(135deg,#2b2b2b,#111); box-shadow:0 6px 18px rgba(0,0,0,.5);
          transition:transform .18s ease,box-shadow .18s ease,background .18s ease;
        }
        .chapter-buttons button:hover, .action-buttons button:hover { transform:translateY(-3px); box-shadow:0 10px 26px rgba(0,0,0,.6); }
        #chapter-content { border:1px solid #333; padding:18px; border-radius:8px; background:#0f0f10; }
        #chapter-title { margin-bottom:8px; color:#4da3ff; }
        #chapter-description { margin-bottom:12px; font-style:italic; color:#bbb; }
        .notes-input {
          width:100%; min-height:200px; border:1px solid #444; outline:none; font-size:14px; line-height:1.5;
          padding:10px 10px 10px 30px; white-space:pre-wrap; position:relative; background:#1a1a1a; color:#fff; border-radius:6px;
        }
        .notes-input div { position:relative; margin:0 0 10px 0; padding-left:20px; min-height:1.5em; }
        .notes-input div::before { content:"•"; position:absolute; left:0; color:#ccc; font-size:16px; line-height:1.5; }
      `}</style>

      <div className="notepad-wrapper">
        <h2>Interview Preparation Notes</h2>

        <div className="chapter-buttons" id="chapter-buttons">
          {chapterOrder.map((id) => (
            <button key={id} onClick={() => switchChapter(Number(id))}>
              {chapters[Number(id)].title}
            </button>
          ))}
        </div>

        <div id="chapter-content">
          <h3 id="chapter-title">{chapters[currentChapter].title}</h3>
          <div id="chapter-description">{chapters[currentChapter].description}</div>

          <div
            key={currentChapter}                 // force remount on chapter switch
            className="notes-input"
            ref={notesRef}
            contentEditable={editable}
            suppressContentEditableWarning
            tabIndex={0}
            onKeyDown={onNotesKeyDown}
            onClick={onNotesClick}
          />

          <div className="action-buttons" style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button className="save-btn" onClick={saveNotes}>Save Notes</button>
            <button className="view-btn" onClick={viewAllNotes}>View All Notes</button>
            <button className="edit-btn" onClick={toggleEdit}>{editable ? "Save" : "Edit"}</button>
          </div>
        </div>
      </div>
    </>
  );
}

function escapeHtml(str: string) {
  return str.replace(/[&<>"]/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[s]!));
}
