import React from 'react';
import classes from './video.module.css';

interface Props {
  id: string;
  className?: string;
}

export const Video: React.FC<Props> = props => {
  const { id, className } = props;

  return (
    <div className={`${classes.root} ${className}`}>
      <iframe
        className={classes.video}
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};
