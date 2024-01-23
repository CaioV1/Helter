export interface Record {
  _id: string,
  title: string,
  band: {
      _id: string,
      name: string
  },
  launch_date: Date,
  pathImage: string,
  created_at: Date,
  update_at: Date,
  active: boolean
}