"use client"
import React from 'react';
import styles from './Home.module.scss';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const Home = () => {
	return (
		<div className={styles.Home}>
			<div className={styles.Navbar}>
				<div className={styles.NavbarData}>
					<div className={styles.Avatar}>
						<Image
							src="/FakeAvatar.svg"
							width={50}
							height={50}
							alt="Avatar"
						/>
					</div>
					<div className={styles.UserData}>
						<p className={styles.p}>Good Day 👋</p>
						<h5 className={styles.h5}>Davy Jones</h5>
					</div>
				</div>
				<div className={styles.Settings}>
					<div className={styles.SettingBody}>
						<Image
								src="/icons/settings.svg"
								width={22}
								height={22}
								alt="Avatar"
								className={styles.SettingIcon}
						/>
					</div>
				</div>
			</div>
			<div className={styles.Balance}>
				<button className={styles.BalanceButton}><ChevronLeft/></button> 
				<div className={styles.BalanceData}>
					<div className={styles.BalanceMoney}>
						<p className={styles.BalanceCurrency}>$</p>
						<h1 className={styles.BalanceCount}>134,87</h1>
					</div>
					<div className={styles.BalanceStats}>
						<div className={styles.BalanceNet}>
							<p className={styles.BalanceStatic}>Net:</p>
							<p className={styles.BalanceDynamicNet}>133$</p>
						</div>
						<div className={styles.BalanceFlow}>
							<p className={styles.BalanceStatic}>Flow:</p>
							<p className={styles.BalanceDynamicFlow}>66.5%</p>
						</div>
					</div>
				</div>
				<button className={styles.BalanceButton}><ChevronRight/></button> 
			</div>
		</div>
	);
}

export default Home;	