import { useState } from "react";
import "./editor.scss";

const genderOptions = [
  { label: "男", value: "male" },
  { label: "女", value: "female" },
  { label: "中立", value: "normal" },
  { label: "不透露", value: "none" },
];

function Editor({
  name,
  setName,
  gender,
  setGender,
  skills,
  setSkills,
  resume,
  setResume,
}) {
  const [newSkill, setNewSkill] = useState("");
  const addNewSkill = () => {
    if (!newSkill) {
      return;
    }
    setSkills([
      ...skills,
      {
        id: Date.now(),
        name: newSkill,
      },
    ]);
    setNewSkill("");
  };

  return (
    <div className="editor">
      <div className="editor-item">
        <h4 className="title">
          姓名
          <span className="required">*</span>
        </h4>
        <input
          type="text"
          className="text-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="editor-item">
        <h4 className="title">性別</h4>
        <div className="radio-group">
          {genderOptions.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                value={option.value}
                onChange={(e) => setGender(e.target.value)}
                checked={gender === option.value}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <div className="editor-item">
        <h4 className="title">專業技能</h4>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill.id}>
              <span className="skill-text">{skill.name}</span>
              <button
                className="btn"
                onClick={() =>
                  setSkills(skills.filter((item) => item.id !== skill.id))
                }
              >
                移除
              </button>
            </div>
          ))}
          <div className="skill-item">
            <input
              type="text"
              className="text-input"
              placeholder="新增專業技能"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button className="btn" onClick={addNewSkill}>
              新增
            </button>
          </div>
        </div>
      </div>
      <div className="editor-item">
        <h4 className="title">簡歷</h4>
        <textarea
          className="text-area"
          placeholder="請填入個人簡歷"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Editor;
