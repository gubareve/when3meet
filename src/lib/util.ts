export function getHourName(hour: number): string {
    let name = hour < 12 ? (hour.toString() + " AM") : ((hour-12).toString() + " PM");
    if (hour == 0) {
        name = "Midnight";
    }
    if (hour == 12) {
        name = "Noon";
    }
    return name;
}