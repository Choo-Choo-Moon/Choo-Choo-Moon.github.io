import { Depoloy, ProjcetType, Role, type Project } from '../../types';
import { contributorStore } from './Contributor.svelte';

class ProjectStore {
	productionProjects = $state<Project[]>([
		{
			projectType: ProjcetType.Production,
			role: [Role.Mobile, Role.Any],
			title: 'TableOrder',
			description: '골프장 내 식음매장에서 태블릿을 통하여 메뉴주문을 할 수 있는 모바일 서비스',
			contribute: [contributorStore.contributers.jino],
			skills: [
				'Kotlin',
				'KotlinFlow',
				'JetpackCompose',
				'Retrofit',
				'Okhttp',
				'DataStore',
				'Moshi',
				'MVI Pattern'
			],
			thumbnail: '/images/project/tableOrder/TableOrder_Menu_Borad.png',
			images: [
				'/images/project/tableOrder/TableOrder_Menu_Borad.png',
				'/images/project/tableOrder/TableOrder_Menu_Detail.png',
				'/images/project/tableOrder/TableOrder_DID.png',
				'/images/project/tableOrder/TableOrder_Auth.png',
				'/images/project/tableOrder/TableOrder_AD.png'
			],
			depoloy: []
		},
		{
			projectType: ProjcetType.Production,
			role: [Role.Mobile, Role.Any],
			title: 'Smartscore Personal App',
			description: '스마트스코어 자사 골프포털 모바일 서비스',
			contribute: [contributorStore.contributers.jino],
			skills: ['WebView', 'SQLite', 'SharedPreference'],
			thumbnail: '/images/project/smartscore/Smartscore_1.webp',
			images: [
				'/images/project/smartscore/Smartscore_1.webp',
				'/images/project/smartscore/Smartscore_2.webp',
				'/images/project/smartscore/Smartscore_3.webp',
				'/images/project/smartscore/Smartscore_4.webp',
				'/images/project/smartscore/Smartscore_5.webp'
			],
			depoloy: [Depoloy.Android, Depoloy.iOS]
		},
		{
			projectType: ProjcetType.Production,
			role: [Role.Mobile, Role.Any],
			title: 'Smartscore ERP App',
			description: '스마트스코어 골프장 ERP 모바일 서비스',
			contribute: [contributorStore.contributers.jino],
			skills: ['WebView', 'ViewSystem', 'Retrofit', 'MVP Pattern'],
			thumbnail: '/images/project/smartscoreErp/SmartscoreERP_1.webp',
			images: [
				'/images/project/smartscoreErp/SmartscoreERP_1.webp',
				'/images/project/smartscoreErp/SmartscoreERP_2.webp',
				'/images/project/smartscoreErp/SmartscoreERP_3.webp',
				'/images/project/smartscoreErp/SmartscoreERP_4.webp',
				'/images/project/smartscoreErp/SmartscoreERP_5.webp',
				'/images/project/smartscoreErp/SmartscoreERP_6.webp'
			],
			depoloy: [Depoloy.Android, Depoloy.iOS]
		}
	]);
	sideProjects = $state<Project[]>([
		{
			projectType: ProjcetType.Side,
			role: [Role.Backend, Role.Any],
			title: 'Fantry',
			description: '한정판 아이돌 굿즈 중고거래 플랫폼',
			contribute: [
				contributorStore.contributers.jeaHwan,
				contributorStore.contributers.jihoon,
				contributorStore.contributers.soHee,
				contributorStore.contributers.hyeowon
			],
			skills: [
				'Java',
				'SpringBoot3',
				'MySQL',
				'JPA',
				'Redis',
				'STOMP',
				'Flyway',
				'Javascript',
				'Vue',
				'axios',
				'WebSocket',
				'ServerSentEvent'
			],
			thumbnail: '/images/project/fantry/fantryLogo.png',
			images: [
				'/images/project/fantry/fantry_main.png',
				'/images/project/fantry/fantry_product_post.png',
				'/images/project/fantry/fantry_product_post2.png',
				'/images/project/fantry/fantry_product_detail.png',
				'/images/project/fantry/fantry_product_detail2.png',
				'/images/project/fantry/fantry_payment.png',
				'/images/project/fantry/fantry_mypage.png',
				'/images/project/fantry/fantry_admin.png'
			],
			depoloy: [Depoloy.OnPremise]
		}
	]);
	toyProjects = $state<Project[]>([
		{
			projectType: ProjcetType.Toy,
			role: [Role.Mobile, Role.Backend, Role.Any],
			title: 'LogCash',
			description: '외화거래 일지 작성 애플리케이션',
			contribute: [],
			skills: [
				'Kotlin',
				'ComposeMultiPlatform',
				'JetpackCompose',
				'ComposeNavigation3',
				'SpringBoot3',
				'Redis'
			],
			thumbnail: '/images/project/logcash/logCash1.png',
			images: ['/images/project/logcash/logCash2.png'],
			depoloy: [Depoloy.OnPremise]
		}
	]);

	projects = $derived([...this.productionProjects, ...this.sideProjects, ...this.toyProjects]);
}

export const projectStore = new ProjectStore();
