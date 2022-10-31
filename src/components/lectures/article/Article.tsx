import ArticleDesktop from "./desktop/article";

export default function Article({ slug, title, text, assignment, nextLecture }) {
  return (
    <ArticleDesktop
      slug={slug}
      title={title}
      text={text}
      assignment={assignment}
      nextLecture={nextLecture}
    />
  );
}
