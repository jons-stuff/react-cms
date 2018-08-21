
import { timestampToUTCLocaleDate } from 'Utilities/datetime';

export default function DateCell({ dataItem, field }) {
  return timestampToUTCLocaleDate(dataItem[field], '-');
}
