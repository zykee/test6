const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    console.log("Debug Info");
    //return 'Hello World!';
};
    function printInventory(inputs) {  
    var item;  
    var item_list=loadAllItems();      
    var list='***<没钱赚商店>购物清单***';  
    var sum=0;  
    for(var i=0;i<inputs.length;i++){  
     item=inputs[i]; 
        if(item_list.length===0){  
            item.count=1;  
            item_list.push(item);  
        }  
        else{for(var j=0;j<item_list.length;j++){  
            if(inputs[i].barcode==item_list[j].barcode){  
               item_list[j].count++;  
            }  
            else if(j==item_list.length-1){  
                item_list.push(item); item.count=0;  
        }  
       }  
      }    
     }  
      
        for(var n=0;n< item_list.length;n++){  
          
        list=list+'\n'+'名称:'+item_list[n].name+','+'数量:'+item_list[n].count+item_list[n].unit+','+'单价:'+item_list[n].price+'.00(元)'+','+'小计:'+item_list[n].count*item_list[n].price+'.00(元)';  
         sum+=item_list[n].count*item_list[n].price;  
        }  
      
    list=list+'\n'+'----------------------'+'\n'+'总计:'+sum+'.00(元)'+'\n'+'**********************';  
      
    console.log(list);  
    }  
