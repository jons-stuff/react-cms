
import { timestampToLocaleDateAndTime } from 'Utilities/datetime';

export default function DateTimeCell({ dataItem, field }) {
  return timestampToLocaleDateAndTime(dataItem[field], '-');
}
