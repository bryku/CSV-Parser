let CVS = {
	types: {
		'array': (s)=>(s.split(/\,\s*/gm)),
		'number': (s)=>(Number(s)),
		'boolean': (s, v = s.toLowerCase())=>{return (s == 1 || s == true || s == 'true')}
	},
    parse: function(file, types){
    	let rows = file.split('\n');
        let keys = rows.shift().split(',');
        return rows.map((row)=>{
	        let r = {};
       		let i = 0;
            while(row.length > 0){
                row = row
					.replace(/^\,/,'')
					.replace(/^\"(.*?)\"\,|^(.*?)\,|^\"(.*?)\"/gms,(a,b)=>{
	     				a = a.replace(/,\s*$/gm,'')
							.replace(/^\"/gms,'')
							.replace(/\"$/gms,'');
	           	        if(types && types[keys[i]] && this.types[types[keys[i]]]){a = this.types[types[keys[i]]](a)}
						r[keys[i]] = a;
						i++;
                	    return ''
	              	});
            }
			return r
        });
    },
};
