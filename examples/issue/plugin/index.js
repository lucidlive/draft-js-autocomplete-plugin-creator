import createCompletionPlugin from 'draft-js-autocomplete-plugin-creator';

import issueSuggestionsStrategy from './findIssueSuggestionStrategy';
import suggestionsFilter from './issueSuggestionsFilter';
import addIssueModifier from './addIssueModifier';
import IssueEntry from './IssueEntry';

import './issueSuggestionsEntryStyles.scss';
import './issueSuggestionsStyles.scss';

const createIssueSuggestionPlugin = (config = {}) => {
  const defaultTheme = {
    issueSuggestions: 'issueSuggestions',
  };
  const completionPlugin = createCompletionPlugin(
    issueSuggestionsStrategy,
    addIssueModifier,
    IssueEntry,
    'issueSuggestions',
    [],
    {
      blockClassName:'tester',  // Block className
      trueLink:false,           // Requires react-router
      linkPrefix:'/'            // Link prefix path
    }
  );
  const configWithTheme = {
    theme: defaultTheme,
    ...config,
  };
  return completionPlugin(configWithTheme);
};

export default createIssueSuggestionPlugin;

export const defaultSuggestionsFilter = suggestionsFilter;
