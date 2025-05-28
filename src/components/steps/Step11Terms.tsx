import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { PDFViewer } from '../PDFViewer';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setTermsInfoField } from '../../store/slices/formSlice';
export const Step11Terms: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const termsInfo = useSelector((state: RootState) => state.form.termsInfo);
  return (
    <section className="step" data-step="11">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step11_title">11. Terms and Conditions</h2>

      <div className="space-y-4">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree_privacy"
            checked={termsInfo.agreePrivacy}
            onChange={(e) => dispatch(setTermsInfoField({ field: 'agreePrivacy', value: e.target.checked }))}
            required />
          <span data-i18n="agree_privacy">
            {"I agree to the "}
            <PDFViewer pdfUrl="/terms-and-conditions.pdf">
              Privacy and Policy
            </PDFViewer>
          </span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree_terms"
            checked={termsInfo.agreeTerms}
            onChange={(e) => dispatch(setTermsInfoField({ field: 'agreeTerms', value: e.target.checked }))}
            required />
          <span data-i18n="agree_terms">
            {"I accept the "}
            <PDFViewer pdfUrl="/terms-and-conditions.pdf">
              Terms and Conditions
            </PDFViewer>
          </span>
        </label>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="confirm_truth"
            checked={termsInfo.confirmTruth}
            onChange={(e) => dispatch(setTermsInfoField({ field: 'confirmTruth', value: e.target.checked }))}
            required />
          <span data-i18n="confirm_truth">
            {t('confirm_truth')}
          </span>
        </label>

        <div className="text-sm text-gray-700 border-l-4 border-red-400 pl-4 py-2 bg-red-50 rounded">
          <span data-i18n="penalty_notice">
            Providing false information is punishable under Article 251 of the Swiss Criminal Code
            (document forgery and false declaration).
          </span>
        </div>
      </div>
    </section>
  )
}