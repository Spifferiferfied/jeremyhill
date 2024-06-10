import { DateTagProps } from "@/types/DateTagProps"
import { format } from "date-fns"

export default function DateTag({ dateTime, formatString, className} : DateTagProps) {
  const date = new Date(dateTime)
  const formattedDate = format(date, formatString)
  return (
    <time dateTime={ dateTime } className={ className } >
      { formattedDate }
    </time>
  )
}
