import { lectureRoutes } from "../config/routes/lectureRoutes";

type IdProps = {
  id: number;
  lectureId: number;
};

export function useNextPage(ids: IdProps) {
  const { id, lectureId } = ids;

  let path = "";
  let title = "";

  const thisLecture = lectureRoutes.routes[lectureId];
  const isLastChapter = !thisLecture.routes
    .map((route) => route.id)
    .includes(id + 1);
  const isLastLecture = lectureRoutes.routes[lectureId + 1] === undefined;

  function getNextChapterLink() {
    path = thisLecture.routes.find((route) => route.id === id + 1).path;
    title = thisLecture.routes.find((route) => route.id === id + 1).title;
  }

  function getNextLectureLink() {
    path = `/${lectureRoutes.routes[lectureId + 1].path.split(`/`)[2]}`;
    title = lectureRoutes.routes[lectureId + 1].title;
  }

  function getIntroductionLink() {
    path === `/${lectureRoutes.routes[0].path.split(`/`)[2]}`;
    title = "Back to Lectures";
  }

  if (isLastChapter) {
    isLastLecture ? getIntroductionLink() : getNextLectureLink();
    return { path, title };
  } else {
    getNextChapterLink();
    return { path, title };
  }
}
