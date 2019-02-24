import PhotoServise from "../servise/PhotoServise";

export const getPhotosAction = dispatch => {
  PhotoServise.getPhoto();
};
