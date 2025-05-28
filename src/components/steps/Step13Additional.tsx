import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setAdditionalInfoField } from '../../store/slices/formSlice';

export const Step13Additional: React.FC = () => {
  const dispatch = useDispatch();
  const { additionalInfo } = useSelector((state: RootState) => state.form);

  const handleFileChange = (field: keyof typeof additionalInfo, file: File | null) => {
    dispatch(setAdditionalInfoField({ field, value: file }));
  };

  return (
    <section className="step" data-step="13">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step13_title">13. Additional Documents</h2>

      <p className="text-sm text-gray-600 mb-4" data-i18n="upload_note">
        You may upload any additional documents relevant to your business (optional).
      </p>

      <div className="space-y-4">
        <label>
          <span data-i18n="financials">Financial Statements</span>
          <div className="mt-1">
            <input
              type="file"
              name="file_financials"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange('financialStatements', e.target.files?.[0] ?? null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            />
            {additionalInfo.financialStatements.name && (
              <p className="mt-1 text-sm text-gray-600">
                {additionalInfo.financialStatements.name} ({(additionalInfo.financialStatements.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>
        </label>

        <label>
          <span data-i18n="business_plan">Business Plan</span>
          <div className="mt-1">
            <input
              type="file"
              name="file_plan"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange('businessPlan', e.target.files?.[0] ?? null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            />
            {additionalInfo.businessPlan.name && (
              <p className="mt-1 text-sm text-gray-600">
                {additionalInfo.businessPlan.name} ({(additionalInfo.businessPlan.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>
        </label>

        <label>
          <span data-i18n="licenses">Licenses / Permits</span>
          <div className="mt-1">
            <input
              type="file"
              name="file_licenses"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange('licensesPermits', e.target.files?.[0] ?? null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            />
            {additionalInfo.licensesPermits.name && (
              <p className="mt-1 text-sm text-gray-600">
                {additionalInfo.licensesPermits.name} ({(additionalInfo.licensesPermits.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>
        </label>

        <label>
          <span data-i18n="supporting">Other Supporting Documents</span>
          <div className="mt-1">
            <input
              type="file"
              name="file_supporting"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange('supportingDocuments', e.target.files?.[0] ?? null)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            />
            {additionalInfo.supportingDocuments.name && (
              <p className="mt-1 text-sm text-gray-600">
                {additionalInfo.supportingDocuments.name} ({(additionalInfo.supportingDocuments.size / 1024).toFixed(1)} KB)
              </p>
            )}
          </div>
        </label>
      </div>
    </section>
  );
};