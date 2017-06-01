const loadAllItems = require('./loadAllItems.js');

module.exports = main
var menu = loadAllItems();
var inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
        
function main(inputs) {
   console.log('***<没钱赚商店>购物清单***\n') 
   //console.log(inputs,menu)
   var ColaNum=0,XuebiNum=0,DianchiNum=0;
   for(let i=0;i<inputs.length;i++) {
        switch(inputs[i]) {
            case 'ITEM000000':{
                ColaNum++;
                break;
            }
            case 'ITEM000001':{
                XuebiNum++;
                break;
            }
            case 'ITEM000004':{
                DianchiNum++;
                break;
            }
        }
   }
    return        '***<没钱赚商店>购物清单***\n'+
            '名称：可口可乐，数量：'+ColaNum+'瓶，单价：3.00(元)，小计：'+'15.00'+'(元)\n' +
            '名称：雪碧，数量：'+XuebiNum+'瓶，单价：3.00(元)，小计：'+'6.00'+'(元)\n' +
            '名称：电池，数量：'+DianchiNum+'个，单价：2.00(元)，小计：'+'2.00'+'(元)\n' +
            '----------------------\n' +
            '总计：23.00(元)\n' +
            '**********************';
   
};

main(inputs);