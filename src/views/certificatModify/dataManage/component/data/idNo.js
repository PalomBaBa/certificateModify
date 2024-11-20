export const idNo = {
  meta: {
    title: '证件号码',
    description: '证件号码',
    type: 'idNo',
    
  },
  data: {
    key: 'idNo_123',
    content: '证件号码',
    color: '#000',
    size: '16',
    top: '0',
    left: '0',
    weight: 'normal'
  },
  configure: {
    attribute: [
      {
        label: '文本',
        type: 'input',
        key: 'content'
      },
      {
        label: '颜色',
        type: 'color',
        key: 'color'
      },
      {
        label: '大小(px)',
        type: 'input',
        key: 'size'
      },
      {
        label: '文本粗细',
        type: 'select',
        key: 'weight',
        options: [
          {
            label: '正常',
            value: 'normal'
          },
          {
            label: '粗体',
            value: 'bold'
          },
          {
            label: '更粗',
            value: 'bolder'
          }
        ]
      },
      {
        label:'top位置',
        type:'input',
        key:'top'
      },
      {
        label:'left位置',
        type:'input',
        key:'left'
      }
    ]
  },
}
