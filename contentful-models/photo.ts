interface IPhotoContent  {
  title: string;
  file: {
    contentType: string;
    fileName: string;
    url: string;
  };
};

export default IPhotoContent;
