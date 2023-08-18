export interface Course{
  id: number,
  name: string,
  image: string,
  course_type: string,
  substantive_function: string,
  hours_num: number,
  value: number
};

export interface Module{
  id: number,
  id_course: number,
  name: string,
  urls_video: string[],
  url_infograph: string,
  url_pdf: string,
}
