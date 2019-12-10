import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/fetcherror.scss';

function FetchError({
  errorModifiers,
  errorBasewords,
  clearModifiers,
  clearBases,
}) {
  useEffect(() => {
    clearModifiers();
    clearBases();
  }, []);
  return (
    <p className="error__http">
      Oh blimey, where we get words from seems to be throwing a wobbly (
      {errorModifiers}
      {errorBasewords}). Give it another whirl, or try later.
    </p>
  );
}

FetchError.propTypes = {
  errorModifiers: PropTypes.string.isRequired,
  errorBasewords: PropTypes.string.isRequired,
  clearModifiers: PropTypes.func.isRequired,
  clearBases: PropTypes.func.isRequired,
};

export default FetchError;
