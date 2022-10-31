import Assignment from "./assignment";
import Main from "../../shared-ui/SpoilerText";
import NextLectureLink from "./next-lecture-link";
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
          padding: `0px 200px 0px 50px`,
          marginTop: "200px",
        }}
      >
        <Title slug={slug} title={title} />
        <div style={{ marginTop: "25px" }}>
          <Main text={text} />
        </div>
      </div>
      <div style={{ marginLeft: "50px", marginTop: "50px" }}>
        <NextLectureLink nextLecture={nextLecture} />
      </div>

      <div style={{ marginTop: "100px" }}>
        <Assignment assignment={assignment} nextLecture={nextLecture} />
      </div>
    </>
  );
}
