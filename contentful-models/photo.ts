interface IPhoto  {
  title: string;
  file: {
    contentType: string;
    fileName: string;
    url: string;
  };
};

export default IPhoto;
