/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				fadeUp: {
					'0%': {
						opacity: 0,
						transform: 'translate3d(0, 100%, 0)'
					},
					'100%': {
						opacity: 1,
						transform: 'translate3d(0, 0, 0)'
					}
				},
				lightSpeed: {
					'0%': {
						opacity: 1,
					},
					'100%': {
						transform: 'translate3d(100%, 0, 0) skewX(30deg)',
						opacity: 0
					}
				},
				lightSpeedL: {
					'0%': {
						opacity: 1,
					},
					'100%': {
						transform: 'translate3d(-100%, 0, 0) skewX(-30deg)',
						opacity: 0
					}
				},
				flipX: {
					'0%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
						opacity: 0
					},
					'40%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
					},
					'60%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
						opacity: 1
					},
					'80%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
					},
					'100%': {
						transform: 'perspective(400px)',
					}
				},
				roll: {
					'0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scaleY(0)' }
				},
				movement: {
					'0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateX(0rem)' },
					'10%': { transform: 'translateX(2rem)' },
					'30%': { transform: 'translateX(-2rem)' },
					'50%': { transform: 'translateY(1rem)' },
					'70%': { transform: 'translateY(-1rem)' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		},
	},
	plugins: [require('tailwind-scrollbar')],
	variants: {
		scrollbar: ['rounded'],
	},
};
