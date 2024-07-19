"use client"
import React, { useEffect, useRef } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "../../lib/utils"

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate()
  const ref = useRef(null)
  let wordsArray = words.split(" ")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(
            "span",
            {
              opacity: 1,
            },
            {
              duration: 1,
              delay: stagger(0.1),
            }
          )
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (word === "\n")
            return (
              <React.Fragment key={idx}>
                <br />
                <br />
              </React.Fragment>
            )
          return (
            <motion.span key={word + idx} className='dark:text-white text-black opacity-0'>
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={cn("font-bold", className)}>
      <div className='mt-4'>
        <div className='dark:text-white text-black text-lg leading-snug tracking-wide'>{renderWords()}</div>
      </div>
    </div>
  )
}
