const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));
// 2021-05-10T13:22:15.000Z
