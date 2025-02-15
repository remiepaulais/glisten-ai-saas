import Bounded from '@/components/Bounded'
import ButtonLink from '@/components/ButtonLink'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import { RefreshCw, Settings } from 'lucide-react'

const icons = {
  Gear: <Settings />,
  Cycle: <RefreshCw />
}

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative'
    >
      <div className='glow bg-blue absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter' />
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className='text-balance text-center text-5xl font-medium md:text-7xl'>
              {children}
            </h2>
          )
        }}
      />
      <div className='mt-16 grid items-center rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 p-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12'>
        <div>
          <div className='aspect-square w-fit rounded-lg bg-blue-500/35 p-4 text-3xl'>
            {slice.primary.icon && icons[slice.primary.icon]}
          </div>
          <div className='mt-6 text-balance text-2xl font-normal'>
            <PrismicRichText field={slice.primary.subheading} />
          </div>

          <div className='prose prose-invert mt-4 max-w-xl'>
            <PrismicRichText field={slice.primary.body} />
          </div>

          <ButtonLink field={slice.primary.button_link} className='mt-6'>
            {slice.primary.button_text || 'Learn More'}
          </ButtonLink>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'pt-8 opacity-90 shadow-2xl lg:col-span-2 lg:pt-0',
            slice.variation === 'showcaseReversed'
              ? 'lg:order-1 lg:translate-x-[15%]'
              : 'lg:-order-1 lg:translate-x-[-15%]'
          )}
        />
      </div>
    </Bounded>
  )
}

export default Showcase
