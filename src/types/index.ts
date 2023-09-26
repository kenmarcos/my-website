export interface Project {
  id: string;
  name: string;
  description: string;
  techs: string[];
  github: string;
  demo: string;
  image: {
    url: string;
  };
}
