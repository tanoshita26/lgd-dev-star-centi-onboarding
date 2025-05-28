import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setCurrentStep } from '../../store/slices/formSlice';
import { useTranslation } from '../../hooks/useTranslation';

export const Step14Review: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formState = useSelector((state: RootState) => state.form);
  const handleEdit = (step: number) => {
    dispatch(setCurrentStep(step));
  };

  const renderSection = (title: string, step: number, content: React.ReactNode) => (
    <div className="border rounded-lg p-4 mb-4 bg-white">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => handleEdit(step)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Edit
        </button>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
    </div>
  );

  const submitButtonClicked = async (e: React.FormEvent) => {
    console.log(formState);
    e.preventDefault();

    const formData = new FormData();
    // formData.append('company_name', formState.companyInfo.name);
    // formData.append('street', formState.companyInfo.address);
    // formData.append('postal_code', formState.companyInfo.postal);
    // formData.append('city', formState.companyInfo.city);
    // formData.append('country_residence', formState.companyInfo.canton);
    // formData.append('phone', formState.companyInfo.phone);
    // formData.append('uid', formState.entityInfo.uid);
    // formData.append('incorporation_date', formState.entityInfo.incorporationDate);
    // formData.append('uid_sole', formState.soleProprietorInfo.uid);
    // formData.append('establishment_date', formState.soleProprietorInfo.establishmentDate);
    // formData.append('owner_name', formState.soleProprietorInfo.ownerName);
    // formData.append('owner_dob', formState.soleProprietorInfo.ownerDob);
    // formData.append('owner_nationality', formState.soleProprietorInfo.ownerNationality);
    // formData.append('owner_address', formState.soleProprietorInfo.ownerAddress);
    // formData.append('verification_method', formState.verificationInfo.verificationMethod);
    // formData.append('person_1_name', formState.establishingPersons[0].name);
    // formData.append('person_1_dob', formState.establishingPersons[0].dob);
    // formData.append('person_1_nationality', formState.establishingPersons[0].nationality);
    // formData.append('person_1_auth', formState.establishingPersons[0].toa);

    const today = new Date();
    const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    formData.append('5', formattedDate);
    formData.append('6', formState.companyInfo.name);
    formData.append('7', formState.companyInfo.address);
    formData.append('8', formState.companyInfo.phone);
    formData.append('9', formState.companyInfo.email);
    formData.append('10', '  ');
    formData.append('11', ' ');
    formData.append('12', ' ');
    formData.append('12:1', formState.entityInfo.registerFile === null ? 'false' : 'true');
    formData.append('13', formState.companyInfo.name);
    formData.append('14', formState.companyInfo.address);
    formData.append('15', ' ');
    formData.append('15:1', formState.entityInfo.articlesFile === null ? 'false' : 'true');
    formData.append('16', formState.companyInfo.name);
    formData.append('17', formState.companyInfo.canton + ' ' + formState.companyInfo.city + ' ' + formState.companyInfo.address + ' ' + formState.companyInfo.postal);
    formData.append('18', ' ');
    formData.append('19', formState.companyInfo.phone);
    formData.append('20', formState.companyInfo.email);
    formData.append('21', ' ');
    formData.append('23', formState.establishingPersons[0].name);
    formData.append('24', formState.establishingPersons[0].address);
    formData.append('25', formState.establishingPersons[0].dob);
    formData.append('26', formState.establishingPersons[0].nationality);
    formData.append('27', formState.establishingPersons[0].toa);
    formData.append('28', formState.establishingPersons[0].iddoc === null ? 'false' : 'true');
    formData.append('29', ' ');
    formData.append('29:1', 'false');
    formData.append('29:2', 'false');
    formData.append('29:3', formState.establishingPersons[0].poa === null ? 'false' : 'true');
    formData.append('31', ' ');
    formData.append('31:1', 'false');
    formData.append('31:2', 'true');
    formData.append('31:3', 'false');
    formData.append('31:4', 'false');
    formData.append('32', ' ');
    formData.append('32:1', 'false');
    formData.append('32:2', 'false');
    formData.append('32:3', 'false');
    formData.append('32:4', 'true');
    formData.append('34', 'No information');
    formData.append('35:5', 'false');
    formData.append('35:1', 'true');
    formData.append('35:2', 'false');
    formData.append('35:3', 'false');
    formData.append('35:4', 'false');
    formData.append('36', 'false');
    formData.append('39', formState.transactionInfo.monthlyVolumeCurrency[0]);


    try {
      let response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        body: formData,
      });
      let data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <section className="step" data-step="14">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step14_title">14. Review & Submit</h2>

      <p className="text-sm text-gray-600 mb-4" data-i18n="review_notice">
        Please review the information you've provided before submitting the application.
      </p>

      <div className="space-y-4">
        {/* Client Type */}
        {renderSection('Client Type', 1, (
          <p>Type: {t(`${formState.clientType}`)}</p>
        ))}

        {/* Company Information */}
        {renderSection('Company Information', 2, (
          <div className="grid grid-cols-2 gap-2">
            <p><span className="font-medium">Name:</span> {formState.companyInfo.name}</p>
            <p><span className="font-medium">Address:</span> {formState.companyInfo.address}</p>
            <p><span className="font-medium">Postal:</span> {formState.companyInfo.postal}</p>
            <p><span className="font-medium">City:</span> {formState.companyInfo.city}</p>
            <p><span className="font-medium">Canton:</span> {formState.companyInfo.canton}</p>
            <p><span className="font-medium">Phone:</span> {formState.companyInfo.phone}</p>
            <p><span className="font-medium">Email:</span> {formState.companyInfo.email}</p>
            <p><span className="font-medium">Industry:</span> {formState.companyInfo.industry}</p>
          </div>
        ))}

        {/* Entity Information */}
        {(formState.clientType === 'foreign_llc' || formState.clientType === 'swiss_llc' || formState.clientType === 'swiss_assoc') && renderSection('Entity Information', 3, (
          <div className="grid grid-cols-2 gap-2">
            <p><span className="font-medium">UID:</span> {formState.entityInfo.uid}</p>
            <p><span className="font-medium">Incorporation Date:</span> {formState.entityInfo.incorporationDate}</p>
            <p><span className="font-medium">Purpose:</span> {formState.entityInfo.purpose}</p>
            <p><span className="font-medium">Listed:</span> {formState.entityInfo.isListed}</p>
            {formState.entityInfo.isListed === 'yes' && (
              <p><span className="font-medium">Exchange:</span> {formState.entityInfo.exchangeName}</p>
            )}
            <p><span className="font-medium">Register File:</span> {formState.entityInfo.registerFile?.name || 'Not uploaded'}</p>
            <p><span className="font-medium">Articles File:</span> {formState.entityInfo.articlesFile?.name || 'Not uploaded'}</p>
          </div>
        ))}

        {/* Establishing Persons */}
        {(formState.clientType === 'swiss_sole' || formState.clientType === 'foreign_sole') && renderSection('Establishing Persons', 4, (
          <div className="space-y-3">
            {formState.establishingPersons.map((person, index) => (
              <div key={person.id} className="border-t pt-2">
                <p className="font-medium">Person {index + 1}</p>
                <div className="grid grid-cols-2 gap-2">
                  <p><span className="font-medium">Name:</span> {person.name}</p>
                  <p><span className="font-medium">DOB:</span> {person.dob}</p>
                  <p><span className="font-medium">Address:</span> {person.address}</p>
                  <p><span className="font-medium">Nationality:</span> {person.nationality}</p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Controlling Information */}
        {renderSection('Controlling Information', 5, (
          <div className="space-y-3">
            <p><span className="font-medium">25% or more control:</span> {formState.controllingInfo.is25Percent ? 'Yes' : 'No'}</p>
            <p><span className="font-medium">Other control:</span> {formState.controllingInfo.inOtherWay ? 'Yes' : 'No'}</p>
            {formState.controllingInfo.controllingPersons.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium">Controlling Persons:</p>
                {formState.controllingInfo.controllingPersons.map((person, index) => (
                  <div key={index} className="pl-4">
                    <p>{person.firstName} {person.lastName}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Beneficial Information */}
        {renderSection('Beneficial Information', 6, (
          <div className="space-y-3">
            <p><span className="font-medium">Sole Owner:</span> {formState.beneficialInfo.isSoleOwner ? 'Yes' : 'No'}</p>
            {formState.beneficialInfo.beneficialOwners.length > 0 && (
              <div className="space-y-2">
                <p className="font-medium">Beneficial Owners:</p>
                {formState.beneficialInfo.beneficialOwners.map((owner, index) => (
                  <div key={index} className="pl-4">
                    <p>{owner.firstName} {owner.lastName}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Business Activity */}
        {renderSection('Business Activity', 7, (
          <div className="space-y-2">
            <p><span className="font-medium">Activity:</span> {formState.businessActivity.professionActivity}</p>
            <p><span className="font-medium">Description:</span> {formState.businessActivity.businessDescription}</p>
            <p><span className="font-medium">Target Clients:</span> {formState.businessActivity.targetClients}</p>
            <p><span className="font-medium">Main Countries:</span> {formState.businessActivity.mainCountries.join(', ')}</p>
          </div>
        ))}

        {/* Financial Information */}
        {renderSection('Financial Information', 8, (
          <div className="grid grid-cols-2 gap-2">
            <p><span className="font-medium">Annual Revenue:</span> {formState.financialInfo.annualRevenue}</p>
            <p><span className="font-medium">Total Assets:</span> {formState.financialInfo.totalAssets}</p>
            <p><span className="font-medium">Liabilities:</span> {formState.financialInfo.liabilities}</p>
          </div>
        ))}

        {/* Transaction Information */}
        {renderSection('Transaction Information', 9, (
          <div className="space-y-2">
            <p><span className="font-medium">Asset Nature:</span> {formState.transactionInfo.assetNature}</p>
            <p><span className="font-medium">Asset Origin:</span> {formState.transactionInfo.assetOrigin}</p>
            <p><span className="font-medium">Asset Category:</span> {formState.transactionInfo.assetCategory}</p>
            <p><span className="font-medium">Monthly Volume:</span> {formState.transactionInfo.monthlyVolume}</p>
            <p><span className="font-medium">Currencies:</span> {formState.transactionInfo.monthlyVolumeCurrency.join(', ')}</p>
          </div>
        ))}

        {/* Sanctions Information */}
        {renderSection('Sanctions Information', 10, (
          <div className="space-y-2">
            <p><span className="font-medium">PEP:</span> {formState.sanctionsInfo.isPep ? 'Yes' : 'No'}</p>
            {formState.sanctionsInfo.isPep && (
              <>
                <p><span className="font-medium">PEP Name:</span> {formState.sanctionsInfo.pepName}</p>
                <p><span className="font-medium">PEP Position:</span> {formState.sanctionsInfo.pepPosition}</p>
                <p><span className="font-medium">PEP Country:</span> {formState.sanctionsInfo.pepCountry}</p>
                <p><span className="font-medium">PEP Period:</span> {formState.sanctionsInfo.pepPeriod}</p>
              </>
            )}
            <p><span className="font-medium">Sanctions:</span> {formState.sanctionsInfo.isSanctions ? 'Yes' : 'No'}</p>
            {formState.sanctionsInfo.isSanctions && (
              <>
                <p><span className="font-medium">Sanctions Name:</span> {formState.sanctionsInfo.sanctionsName}</p>
                <p><span className="font-medium">Sanctions Country:</span> {formState.sanctionsInfo.sanctionsCountry}</p>
                <p><span className="font-medium">Sanctions Nature:</span> {formState.sanctionsInfo.sanctionsNature}</p>
              </>
            )}
          </div>
        ))}

        {/* Additional Documents */}
        {renderSection('Additional Documents', 13, (
          <div className="space-y-2">
            <p><span className="font-medium">Financial Statements:</span> {formState.additionalInfo.financialStatements.name || 'Not uploaded'}</p>
            <p><span className="font-medium">Business Plan:</span> {formState.additionalInfo.businessPlan.name || 'Not uploaded'}</p>
            <p><span className="font-medium">Licenses/Permits:</span> {formState.additionalInfo.licensesPermits.name || 'Not uploaded'}</p>
            <p><span className="font-medium">Supporting Documents:</span> {formState.additionalInfo.supportingDocuments.name || 'Not uploaded'}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          onClick={submitButtonClicked}
        >
          <span data-i18n="submit_final">Submit Application</span>
        </button>
      </div>
    </section >
  );
};