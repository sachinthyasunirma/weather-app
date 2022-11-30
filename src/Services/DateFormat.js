import {DateTime} from 'luxon';

export const formatToLocalDate = (secs, zone, format="cccc, dd LLL yyyy'")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const formatToTime = (secs, zone, format="hh:mm a")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

