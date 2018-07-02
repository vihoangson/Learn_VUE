new Vue({
    el: '#app',
    data: {        
        isListShow:true ,
        total_like : 100,
        membervote:[],
        books:[
        {name:"Hoang Son",like:1},
        {name:"Quoc Cuong",like:1},
        {name:"Chi Cuong",like:1},
        {name:"Le Quyen",like:1}
        ]
        
    },
    methods :{
        isListShowControl:function(flag){            
            if(this.isListShow){
                this.isListShow = !flag;
                
            } else{
                this.isListShow = flag;
            }
        },
        doLike: function(member){
            if(member.like >=0){
                member.like++;
                this.total_like--;                
            }


        },
        doUnLike: function(member){
            if(member.like >0){
                member.like--;
                this.total_like++;
            }

        },
        doVote: function(member){
            var dataMember = this.getMemberInList(member);
            if(dataMember){
                dataMember.soluong++;
            }else{
                this.membervote.push({
                    member:member,
                    soluong:1
                });                
            }


        },
        getMemberInList: function(member){
            for (var i = 0; i < this.membervote.length; i++) {
                if (this.membervote[i].member.name === member.name) {
                    return this.membervote[i];
                }
            }

            return null;
        }
        
        
    },
    computed:{
        member_vote_list:function(){            
            return this.membervote.name;
        }
    }


});