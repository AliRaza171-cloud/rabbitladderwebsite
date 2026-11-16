import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Rabbit Ladders` : 'Rabbit Ladders | Kids Store at The Point, El Segundo';
  }, [title]);
}
