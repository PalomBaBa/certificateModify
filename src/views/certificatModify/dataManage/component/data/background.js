const background = {
    meta: {
        title: '背景',
        description: '背景',
        type: 'background'
    },
    data: {
        width: 300,
        height: 300,
        backgroundURL: 'http://oss.daircloud.com/test/images/76cc1fa54d1f9b5314dfad1f3248388532174538.jpg',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: ''
    },
    configure: {
        attribute: [
            {
                label:'宽度',
                key:'width',
                type:'input'
            },
            {
                label:'高度',
                key:'height',
                type:'input'
            },
            {
                label:'背景图片地址',
                key:'backgroundURL',
                type:'input'
            },
            {
                label:'背景图片大小',
                key:'backgroundSize',
                type:'input'
            },
            {
                label:'背景图片是否重复',
                key:'backgroundRepeat',
                type:'select',
                options:[
                    {label:'否',value:'no-repeat'},
                    {label:'是',value:'repeat'}
                ]
            },
            {
                label:'背景图片位置',
                key:'backgroundPosition',
                type:'input'
            }
        ]
    },
}


export default background