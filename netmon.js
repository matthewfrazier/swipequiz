var netmon = {
   initialize : function () {
      
   },
   resources : 
   [
      {
         name : 'msiservices.com',
         homeurl : 'http://msiservices.com',
         pingurl : 'http://msiservices.com/netmon.php',
         status : 'OK',
         summary : 'OK',
         items : 
         [
          {name : 'DiskSpace', value : '22.13 GB'},
          {name : 'Database Up?', value : 'Yes'}
         ]
      },
      {
         name : 'server 2',
         homeurl : 'http://someurl',
         pingurl : 'http://someurl/netmon.cfm',
         status : 'OK',
         summary : 'OK',
         items : 
         [
          {name : 'DiskSpace', value : '100.8 GB'},
          {name : 'Database Up?', value : 'Yes'}
         ]
      },
      {
         name : 'server 3',
         homeurl : 'http://someurl',
         pingurl : 'http://someurl/netmon.asp',
         status : 'OK',
         summary : 'OK',
         items : 
         [
          {name : 'DiskSpace', value : '10.8 GB'},
          {name : 'Database Up?', value : 'Yes'}
         ]
      },
      {
         name : 'server 4',
         homeurl : 'http://someurl',
         pingurl : 'http://someurl/netmon.php',
         status : 'BAD',
         summary : 'Low Disk Space',
         items : 
         [
          {name : 'DiskSpace', value : '222.8 MB'},
          {name : 'Database Up?', value : 'Yes'}
         ]
      },
      {
         name : 'server 5',
         homeurl : 'http://someurl',
         pingurl : 'http://someurl/netmon.jsp',
         status : 'OK',
         summary : 'OK',
         items : 
         [
          {name : 'DiskSpace', value : '782.8 GB'},
          {name : 'Database Up?', value : 'Yes'}
         ]
      }
   ],
   render : function(index,itm) {
      try {
         var ret = "";
         ret += "<div class='serverentry " + itm.status + " " + (index % 2 == 0 ? 'even' : 'odd') + "'>";
         ret += "<span class='name'>" + itm.name + "</span>&nbsp;&nbsp;<a target='_blank' href='" + itm.homeurl + "'>Show</a><br />";
         if (itm.status != "OK") {
            ret += "<span class='summary'>-" + itm.summary + "</span><br />";
         }
         
         ret += "<div class='serveritems'>"; 
         jQuery.each(itm.items,function (j,itemdetail) {
            ret += "&gt;&gt;" + itemdetail.name + "=" + itemdetail.value + "<br />";
         });
         ret += "</div>";      
         


         
         ret += "</div>";
         return ret;
      } catch (e) {
            return "<div class='error'>Error rendering item [" + itm.name + "] " + e + "</div>";
      }
   }
};
