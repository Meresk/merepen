import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useRef, useState, useEffect } from 'react';
import styles from './TruncatedText.module.css';

interface TruncatedTextProps {
  text: string;
  className?: string;
}

export function TruncatedText({ text, className }: TruncatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setIsTruncated(el.scrollWidth > el.clientWidth);
  }, [text]);

  const content = <div ref={ref} className={className}>{text}</div>;

  return isTruncated ? (
    <Tippy
      content={text}
      placement="top"
      animation="shift-away"
      delay={[100, 50]}
      className={styles.tooltipBox}
    >
      {content}
    </Tippy>
  ) : (
    content
  );
}
