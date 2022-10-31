import { lectureRoutes } from "../config/routes/lectureRoutes";
export function useNextPage(ids) {
  const { id, lectureId } = ids;
  let path = "";
  let title = "";
  const thisLecture = lectureRoutes.routes[lectureId];

  if (!thisLecture.routes.map((route) => route.id).includes(id + 1)) {
    path = `/${lectureRoutes.routes[lectureId + 1].path.split(`/`)[2]}`;
    title = lectureRoutes.routes[lectureId + 1].title;
  } else {
    path = thisLecture.routes.find((route) => route.id === id + 1).path;
    title = thisLecture.routes.find((route) => route.id === id + 1).title;
    if (!path) {
      path === `/${lectureRoutes.routes[0].path.split(`/`)[2]}`;
      title = lectureRoutes.routes[0].title;
    }
  }
  return { path, title };
}

/**
 * next link will currentLectureId and id + 1
 *
 */
