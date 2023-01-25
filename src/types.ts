export interface Route {
	name: string
	path: string
	component: string
	props: boolean
	title: string
	excerpt: string,
	empty: boolean
	date: string
}

export interface Pages { [key: string]: Route[] }