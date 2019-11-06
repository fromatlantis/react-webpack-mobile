import React, { PureComponent } from 'react'
import styles from './Ranges.module.css'

export default class Ranges extends PureComponent {
    item() {
        return null
    }
    showItem() {
        let { rangesData = [], renderRow = this.item, len = 3 } = this.props
        let item = []
        let width = 100 / len + '%'
        for (let i in rangesData) {
            item.push(
                <div
                    key={i}
                    style={{
                        display: 'flex',
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {renderRow(rangesData[i], i)}
                </div>,
            )
        }
        let length = rangesData.length % len
        if (length) {
            for (let i = 0; i < length; i++) {
                item.push(
                    <div
                        key={i + rangesData.length}
                        style={{
                            display: 'flex',
                            width: width,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    />,
                )
            }
        }
        return item
    }
    render() {
        let { padding = '' } = this.props
        return (
            <div
                style={{
                    padding,
                }}>
                <div className={styles.itemBox}>{this.showItem()}</div>
            </div>
        )
    }
}

/***
 * 
 * 
 * 
        rangesData: [
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=434620136,424427949&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2115054162,1112954537&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476833193,2209982244&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=465598662,4026916364&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4009962951,2135768552&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2722157898,2700618609&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3605800553,1683296319&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1915011011,2156126360&fm=26&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777233881,1106483217&fm=26&gp=0.jpg',
            // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1217994855,193273259&fm=26&gp=0.jpg',
            // 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2002915800,1792756943&fm=26&gp=0.jpg',
        ],
        
        const row = (item, index) => {
            return <img src={item} alt="" style={{ width: '100%', height: 50 }} />
        }
 
        <Ranges
            rangesData={rangesData} // 数据。
            renderRow={row} // 每一个item 
            len={5} //每行几个
            padding="10px 20px 0px 50px" // 整体展示区域外的padding
        /> 


 * 
 * 
 * 
 */
