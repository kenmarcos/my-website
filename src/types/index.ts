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

export interface MainSkill {
  name: string;
  icon: string;
}

export interface OtherSkill {
  id: string;
  description: string;
}
