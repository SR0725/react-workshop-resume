import "./previewer.scss";

const genderMap = {
  male: "男",
  female: "女",
  normal: "中性",
  none: "不願透露",
};

function Previewer({ name, gender, skills, resume }) {
  return (
    <div className="previewer">
      <div className="resume">
        <header className="resume-header">
          <h1 className="name">{name}</h1>
          <div className="info">
            {gender && <p className="gender">性別: {genderMap[gender]}</p>}
          </div>
        </header>
        <section className="profile-section">
          <h2>簡歷</h2>
          <pre>{resume}</pre>
        </section>
        <section className="skills-section">
          <h2>專業技能</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Previewer;
