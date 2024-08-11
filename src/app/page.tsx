import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'

export default function Page() {
	return (
		<div className='page-container'>
			<div className='page-content-wrapper'>
				<div className='page-content-overlay' />
				<div className='page-content'>
					<h1 className='page-title'>HRT.info</h1>
					<TooltipProvider>
						<Tooltip>
							<p className='page-text'>
								HRT.info has transitioned from its previous format due to time
								constraints, but it now serves as a central hub for all your{' '}
								<TooltipTrigger>HRT</TooltipTrigger> needs. While the original
								site has been discontinued, you can still access it through
								provided buttons. Explore our curated collection of guides,
								tools, and community resources to navigate your journey. If you
								wish to take over this domain, please contact us.
							</p>
							<TooltipContent>
								<p>Hormone Replacement Therapy</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<div className='button-group'>
						<Button asChild className='button-primary'>
							<Link href='https://github.com/harmony-within-us'>GitHub</Link>
						</Button>
						<div className='flex flex-row items-center gap-4'>
							<Button asChild className='button-secondary'>
								<Link href='https://discord.gg/mgtbUuy79m'>Get in touch</Link>
							</Button>
							<Button asChild className='button-secondary'>
								<Link href='https://old.hrt.info/'>Visit Old Site</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='page-content-wrapper'>
				<div className='page-content-overlay' />
				<div className='page-content'>
					<h2 className='page-title'>Navigation</h2>
					<div className='button-group'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://rentry.org/mtfg'>
											Male to Female General
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Rentry Guide from imageboards.</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://transfemscience.org/'>
											Transfeminine Science
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Transfeminine Science is a resource for original
										informational content on the subject of transfeminine
										hormone therapy.
									</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://trans.chat/'>Trans.Chat</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										TransChat is a transgender support group. We provide
										information, and meeting places online for people to
										communicate in a safe space.
									</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://wiki.sumianvoice.com/'>V.R.R.</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Voice Resource Repository</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div className='button-group'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://actionfortranshealth.org.uk/resources/for-trans-people/'>
											Action for Trans Health
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										This page contains various resources from Action for Trans
										Health and from around the web which may be useful for trans
										people.
									</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://2345.lgbt/en/'>2345.LGBT</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>Transgender Navigation</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://uniguide.oau.edu.kg/'>
											Trans University Guidance
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Currently, our primary focus is on academic higher
										education, but we are also making efforts to supplement
										information on vocational-oriented higher education.
									</p>
								</TooltipContent>
							</Tooltip>
							<Tooltip>
								<TooltipTrigger>
									<Button asChild className='button-secondary'>
										<Link href='https://genderanalysis.net/'>
											Gender Analysis
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>
										Gender Analysis is a web series launched in 2014 exploring
										transgender science and life experiences in depth, and
										revealing the many insights to be found at their
										intersection.
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
			</div>
			<div className='page-footer'>
				&copy;{' '}
				<Link href='https://github.com/harmony-within-us'>
					2024 Harmony Within Us. All rights reserved.
				</Link>
			</div>
		</div>
	)
}
