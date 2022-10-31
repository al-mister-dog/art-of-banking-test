import Assignment from "./assignment";
import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

export default function Article({
  slug,
  title,
  text,
  assignment,
  nextLecture,
}) {
  return (
    <>
      <div
        style={{
          padding: `0px 10px 0px 10px`,
          marginTop: "200px",
        }}
      >
        <Title slug={slug} title={title} />
        <div style={{ marginTop: "25px" }}>
          <Main text={text} />
        </div>
      </div>

      <div style={{ marginTop: "200px" }}>
        <Assignment assignment={assignment} nextLecture={nextLecture} />
      </div>
    </>
  );
}
