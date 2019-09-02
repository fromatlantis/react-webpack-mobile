import React, { PureComponent } from 'react'
import styles from './ShowAbout.module.css'

export default class ShowAbout extends PureComponent {
    render() {
        return (
            <div className={styles.ShowAboutBox}>
                <p
                    className={styles.show}
                    style={{
                        color: this.props.showColor,
                    }}>
                    {this.props.show}
                </p>
                <p
                    className={styles.about}
                    style={{
                        color: this.props.aboutColor,
                    }}>
                    {this.props.about}
                </p>
                {this.props.type ? <div className={styles.timeout}>{this.props.type}</div> : null}
            </div>
        )
    }
}
//<ShowAbout show="巡检开始时间" about={getPatrolInfo.patrolBeginTime} />
//
/**
 * 
 * 
  <ShowAbout
                            show="巡检结果"
                            about={getPatrolInfo.patrolResult}
                            aboutColor={
                                getPatrolInfo.patrolResult == '正常' ? '#2499FA' : '#E7242F'
                            }
                        />
 */
