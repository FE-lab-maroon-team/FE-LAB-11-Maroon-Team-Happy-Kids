import React from 'react';
import { connect } from 'react-redux';
import styles from './events-cart-table.module.scss';

const EventCartTable = ({ items, allTotal, allCurrentTotal,  onDonated}) => {
    const renderRow = (item, idx) => {
        const { id, name, total, currentTotal, progress } = item;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{total} грн.</td>
                <td>{currentTotal} грн.</td>
                <td>{progress}</td>
                <td className={styles.btnCartTableTd}>
                    <div>
                        <button className={styles.btn} 
                        onClick={() => onDonated(id)}>Долучитися</button>
                    </div>
                </td>
                </tr> 
            );
    }

    return (
        <div className={styles.eventCartTable}>
            <h2>Ваші пожертвуваня</h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Подія</th>
                        <th>Необхідна сма</th>
                        <th>Зібрано коштів</th>
                        <th>Прогрес...</th>
                        <th>Дії</th>
                    </tr>
                </thead>

                <tbody>
                    { items.map(renderRow) }
                </tbody>
            </table>

            <div>
                <i className={styles.mainEventsBlockHeader} />
                <h3> Активних подій: {items.length} .</h3>
                <h3> Hеобхідно зібрати коштів: {allTotal} грн.</h3>
                <h3> Зібрано коштів: {allCurrentTotal} грн.</h3>
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, eventsTotal, eventsCurrentTotal }) => {
    return {
      items: cartItems,
      allTotal: eventsTotal,
      allCurrentTotal: eventsCurrentTotal
    };
  };
  
  const mapDispatchToProps = () => {
    return {
        onDonated: (id) => {
        console.log(`Пожертвувано 100грн. для id: ${id}`);
      }
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(EventCartTable);