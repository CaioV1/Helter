export interface Song {

    _id: string,
    band: {
        _id: string,
        name: string
    },
    authors: [{
        _id: string,
        name: string
    }],
    title: string,
    filename: string,
    file_path: string,
    file_size: number,
    record: string,
    duration: number,
    created_at: Date,
    update_at: Date,
    active: boolean

}