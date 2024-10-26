import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function SocialBar() {
  return (
    <div className="flex flex-row gap-3 rounded-full bg-white px-3 py-2 shadow-md ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <i className="i-ri-github-fill size-6 text-slate-600" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <i className="i-ri-twitter-x-fill size-6 text-slate-600" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <i className="i-ri-steam-fill size-6 text-slate-600" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Steam</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
