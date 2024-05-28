var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('Vouchers.json', 'utf8'));

let LocalHeaderData = obj.map(element => {
    let LocalArray = [];
    let LocalHeaderObj = {};

    LocalHeaderObj.SupplierName = element.SupplierName;
    LocalHeaderObj.BillNumber = element.BillNumber;
    LocalHeaderObj.Date = element.Date;
    LocalHeaderObj.AliasName = element.AliasName;
    LocalHeaderObj.TotalAmount = element.TotalAmount;
    LocalHeaderObj.pk = parseInt(element.pk);
    LocalHeaderObj.UuId = parseInt(element.pk);
    LocalHeaderObj.DateTime = element.Date !== "" ? new Date(new Date(element.Date).setHours(8, 4, 27, 250)).toISOString() : ""
    LocalArray.push(LocalHeaderObj);

    console.log("LocalHeaderObj:", LocalHeaderObj);

    return LocalHeaderObj;
});
fs.writeFile("Vouchers2.json", JSON.stringify([...LocalHeaderData]), function (err) {
    if (err) throw err;
    console.log('complete');
});

// {
//     "SupplierName": "SREENIVAS",
//     "BillNumber": "1",
//     "Date": "2024-05-27",
//     "AliasName": "KSV",
//     "TotalAmount": null,
//     "pk": 1,
//     "UuId": 1,
//     "DateTime": "2024-05-27T08:04:27.250Z"
//   }