var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('Vouchers.json', 'utf8'));
let LocalArray = [];

obj.map(element => {

    Object.values(element.InvGrid).map((e) => {
        let obj = {}
        obj.ItemName = e.ItemName
        obj.FK = element.pk
        obj.UnitRate = e.UnitRate
        obj.Qty = e.Qty
        obj.sno = e.sno
        obj.PercentageValueAddition = e.PercentageValueAddition
        obj.MRP = e.MRP
        obj.Amount = e.Amount;
        obj.DateTime = element.Date !== "" ? new Date(new Date(element.Date).setHours(8, 4, 27, 250)).toISOString() : ""
        LocalArray.push(obj)

        // return obj
    });
});

let LocalPurchaseItems = LocalArray.map((ele, index) => {
    let localIndex = index + 1
    ele.pk = localIndex;
    ele.UuId = localIndex;
    return ele;
});

fs.writeFile("PurchaseItems5.json", JSON.stringify(LocalPurchaseItems), function (err) {
    if (err) throw err;
});

// {
//     "ItemName": "shart",
//     "FK": "2",
//     "UnitRate": 500,
//     "Qty": 4,
//     "sno": null,
//     "PercentageValueAddition": 20,
//     "MRP": 600,
//     "Amount": 2000,
//     "UuId": 1,
//     "DateTime": "2024-05-27T08:09:12.436Z"
//   }