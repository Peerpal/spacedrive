
export type ClientEvent = { type: "NewFileTypeThumb", data: { file_id: number, icon_created: boolean, } } | { type: "NewJobCreated", data: { job_id: number, progress: number, } };