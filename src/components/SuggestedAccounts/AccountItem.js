// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4be1fe62a1d3a6093b0c69b34d96891e~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=748cefdb&x-expires=1741406400&x-signature=MutQ95Fskzw3Ie2XE1WNZa9NyVQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Quốc Nguyễn Phú</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc</p>
            </div>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
